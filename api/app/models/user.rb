class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User

  has_many :posts, dependent: :destroy
  has_many :favorites, dependent: :destroy
  has_many :favorite_posts, through: :favorites, source: :post

  # フォローするユーザーから見た中間テーブル
  has_many :active_relationships,
                      class_name: "Relationship",
                      foreign_key: "follower_id",
                      dependent: :destroy

  # フォローされているユーザーから見た中間テーブル
  has_many :passive_relationships,
                      class_name: "Relationship",
                      foreign_key: "followed_id",
                      dependent: :destroy

  # フォローしているユーザーの情報がわかるようになる
  has_many :followings, through: :active_relationships, source: :followed

  #　フォローされているユーザーの情報がわかるようになる
  has_many :followers, through: :passive_relationships, source: :follower

  # フォローする
  def follow(user_id)
    active_relationships.create(followed_id: user_id)
  end

  # フォローを外す
  def unfollow(user_id)
    active_relationships.find_by(followed_id: user_id).destroy
  end

  # すでにフォローしているのか確認
  def following?(current_api_v1_user)
    followers.include?(current_api_v1_user)
  end
end
