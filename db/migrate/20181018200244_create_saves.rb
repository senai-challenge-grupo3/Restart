class CreateSaves < ActiveRecord::Migration[5.0]
  def change
    create_table :saves do |t|
      t.integer :felicidade
      t.integer :recurso
      t.integer :casa_lv
      t.integer :oficina_lv
      t.integer :fabrica_lv
      t.integer :vida
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
