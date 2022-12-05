// 사용자 아이디 일부 *로 가리는 함수
const blindUserId = (userId) => {
    let currentId = userId;
    let changeStr = '';
    let targetStr = currentId.slice(-parseInt(currentId.length / 2));

    for (let j = 0; j < targetStr.length; j++) {
        changeStr += '*';
    }

    let result = currentId.replace(targetStr, changeStr);

    return result;
};

export default blindUserId;
