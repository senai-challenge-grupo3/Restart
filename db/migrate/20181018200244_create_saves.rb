class CreateSaves < ActiveRecord::Migration[5.0]
  def change
    create_table :saves do |t|
      t.integer :felicidade,  default: 100
      t.integer :recurso,     default: 0
      t.integer :casa_lv,     default: 1
      t.integer :oficina_lv,  default: 1
      t.integer :fabrica_lv,  default: 1
      t.integer :vida,        default: 3
      t.integer :score,       default: 0
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
