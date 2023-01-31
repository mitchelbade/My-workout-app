class ProgramSerializer < ActiveModel::Serializer
  attributes :id, :name, :description
  has_one :user
end
