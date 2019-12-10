class Tag < ApplicationRecord
    belongs_to :user

    has_many :taggings, dependent: :destroy
    has_many :flashcards, through: :taggings

    validates :user, presence: true, uniqueness: { scope: :user_id }
end
