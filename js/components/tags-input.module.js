const tagsControlInputs = document.querySelectorAll('.form-tags-control__input');

let Arr = ['HTML', 'CSS', 'PHP', 'Javascript', 'Dart', 'Python', 'Swift', 'Java', 'C++', 'Go', 'SASS', 'C#', 'LESS', 'Perl', 'Ruby']

function autoComplete(Arr, Input) {
    return Arr.filter(e => e.toLowerCase().includes(Input.toLowerCase()));
}

function getValue() {
    // if no value
    if (!this.textContent) {
        // result.innerHTML = '';
        this.closest('.form-tags-control__container').querySelector('.search-result').innerHTML = '';
        this.closest('.form-tags-control__container').querySelector('.search-result').remove();
        return;
    }
    // search goes here 
    var data = autoComplete(Arr, this.textContent);

    // append list data
    const searchResult = document.createElement('div');
    searchResult.setAttribute('class', 'search-result');
    if (!this.closest('.form-tags-control__container').querySelector('.search-result')) {
        this.closest('.form-tags-control__container').appendChild(searchResult);
    }

    var res = '';
    data.forEach(e => {
        res += '<a href="#">' + e + '</a>';
    });
    this.closest('.form-tags-control__container').querySelector('.search-result').innerHTML = res;

    if (this.closest('.form-tags-control__container').querySelector('.search-result').innerHTML.length == 0) {
        this.closest('.form-tags-control__container').querySelector('.search-result').remove();
    }
}

function selectTag(e) {
    // if (e.target.closest('.search-result')) {
    if (e.target.matches('.search-result a')) {
        e.preventDefault();
        e.stopPropagation();
        let resulTagLabel = e.target.textContent;
        let parentInput = e.target.parentNode.previousElementSibling.querySelector('.form-tags-control__input');
        parentInput.textContent = resulTagLabel;

        const tag = document.createElement('div');
        tag.setAttribute('class', 'form-tags-control__tag');
        const tagLabel = document.createElement('span');
        tagLabel.setAttribute('class', 'form-tags-control__tag__label');
        tagLabel.innerHTML = resulTagLabel;
        const removeBtn = document.createElement('a');
        removeBtn.setAttribute('class', 'form-tags-control__tag__delete');
        removeBtn.setAttribute('href', '#');
        removeBtn.innerHTML = '<svg viewBox="0 0 8.5 8.5"><path d="M5,4.2l3.5,3.5L7.8,8.5L4.2,5L0.7,8.5L0,7.8l3.5-3.5L0,0.7L0.7,0l3.5,3.5L7.8,0l0.7,0.7L5,4.2z"></path></svg>';
        tag.appendChild(tagLabel);
        tag.appendChild(removeBtn);
        e.target.parentNode.previousElementSibling.insertBefore(tag, parentInput);
        parentInput.textContent = '';
        e.target.parentNode.remove();
    }
}


// let tags = [];

function enterTag(e) {
    e.preventDefault();
    if (e.keyCode == 13 && this.textContent != '') {
        const tag = document.createElement('div');
        tag.setAttribute('class', 'form-tags-control__tag');
        const tagLabel = document.createElement('span');
        tagLabel.setAttribute('class', 'form-tags-control__tag__label');
        tagLabel.innerHTML = this.textContent;
        const removeBtn = document.createElement('a');
        removeBtn.setAttribute('class', 'form-tags-control__tag__delete');
        removeBtn.setAttribute('href', '#');
        removeBtn.innerHTML = '<svg viewBox="0 0 8.5 8.5"><path d="M5,4.2l3.5,3.5L7.8,8.5L4.2,5L0.7,8.5L0,7.8l3.5-3.5L0,0.7L0.7,0l3.5,3.5L7.8,0l0.7,0.7L5,4.2z"></path></svg>';
        tag.appendChild(tagLabel);
        tag.appendChild(removeBtn);
        this.parentNode.insertBefore(tag, this);
        // tags.push(this.textContent);
        this.textContent = '';
        // console.log(tags)
    }
}

function deleteTags(e) {
    if (e.keyCode == 8 && this.textContent.length == 0) {
        if (this.previousElementSibling) {
            // const tagLabel = this.previousElementSibling.querySelector('.form-tags-control__tag__label').textContent;
            // const index = tags.indexOf(tagLabel);
            // tags = [...tags.slice(0, index), ...tags.slice(index + 1)];
            this.previousElementSibling.remove();
            // console.log(tags)
        }
    }
}

function removeTag(e) {
    if (e.target.classList.contains('form-tags-control__tag__delete')) {
        e.preventDefault();
        // const tagLabel = e.target.previousElementSibling.textContent;
        // const index = tags.indexOf(tagLabel);
        // tags = [...tags.slice(0, index), ...tags.slice(index + 1)];
        e.target.parentNode.remove();
        // console.log(tags)
    }
}

tagsControlInputs.forEach(input => input.addEventListener('keyup', getValue));
tagsControlInputs.forEach(input => input.addEventListener('keyup', enterTag));
tagsControlInputs.forEach(input => input.addEventListener('keydown', deleteTags));
document.addEventListener('click', removeTag);
document.addEventListener('click', selectTag);