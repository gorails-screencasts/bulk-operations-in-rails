import CheckboxSelectAll from "stimulus-checkbox-select-all"

export default class extends CheckboxSelectAll {
  destroy(event) {
    event.preventDefault()

    let data = new FormData()
    if (this.checked.length == this.checkboxTargets.length) {
      data.append("all", true)
    } else {
      this.checked.forEach((checkbox) => data.append("ids[]", checkbox.value))
    }

    Rails.ajax({
      url: "/posts/bulk",
      type: "DELETE",
      data: data
    })
  }
}
