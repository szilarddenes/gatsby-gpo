import styled from 'styled-components';

export const PopupStyles = styled.div`
.popup-box {
  position: fixed;
  background: #00000050;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index:1;
}

.box {
  position: relative;
  width: 70%;
  margin: 0 auto;
  height: auto;
  max-height: 70vh;
  margin-top: calc(100vh - 85vh - 20px);
  background: ${({ theme }) => (theme === 'dark' ? '#212121' : '#fff')};
  
  border-radius: 4px;
  padding: 20px;
  border: 2px solid ${({ theme }) => (theme === 'light' ? '#212121' : '#ffff34')};
  overflow: auto;

  p{
    color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')}
    margin-bottom: 1.45rem;
text-align: justify;
font-size: 1rem;
  }
}

.close-icon {
  content: 'x';
  cursor: pointer;
  position: fixed;
  right: calc(15% - 30px);
  top: calc(100vh - 85vh - 33px);
  background: #ffff34;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  line-height: 20px;
  text-align: center;
  border: 2px solid #000;
  font-size: 20px;
  font-weight: bold;
  color: #212121;

}`