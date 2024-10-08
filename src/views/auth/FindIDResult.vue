<template>
  <div class="find-id-result-container">
    <div class="find-id-result-text">
      <h1>회원님의 휴대전화로</h1>
      <h1>가입된 아이디가 {{ userCount }}개 있습니다</h1>
    </div>
    <div v-if="userCount > 0">
      <RadioButton
        v-model="selectedOption"
        :options="radioOptions"
      />
    </div>
    <div v-else>
      <p>가입된 아이디가 없습니다.</p>
    </div>

    <div class="find-password">
      <span class="find-password-text">비밀번호가 기억나지 않으세요?</span>
      <span class="find-password-link">비밀번호 찾기</span>
    </div>

    <Button
      class="next-button"
      :disabled="!canProceed"
      @click="nextPage"
      :text="buttonText"
    />
  </div>
</template>

<script setup lang="ts">
import { Button, RadioButton } from '@/components';
import { useRouter, useRoute } from 'vue-router';
import { ref, onMounted, computed } from 'vue';
import { findID } from '@/apis/userFeature/userInfo';

const router = useRouter();
const route = useRoute();

const selectedOption = ref('');
const radioOptions = ref([]);
const userCount = ref(0);

onMounted(async () => {
  try {
    const name = route.query.name as string;
    const phoneNumber = route.query.phoneNumber as string;

    const response = await findID(name, phoneNumber);

    userCount.value = response.length;
    radioOptions.value = response.map((user) => {
      const date = new Date(user.createdAt);
      const formattedDate = `${date.toLocaleDateString('ko-KR')} 가입`;
      return {
        label: user.email,
        value: user.id,
        description: formattedDate,
      };
    });
  } catch (error) {
    console.error('Error:', error);
  }
});

const canProceed = computed(() => {
  return userCount.value === 0 || selectedOption.value !== '';
});

const buttonText = computed(() => {
  return userCount.value > 0 ? '다음' : '회원가입 바로가기';
});

const nextPage = () => {
  if (userCount.value === 0) {
    router.push({ path: '/signup' });
  } else {
    router.push({ path: '/findpassword/phone' });
  }
};
</script>

<style scoped>
.find-id-result-container {
  margin-top: 40px;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: space-between;
}

.find-id-result-text {
  font-family: var(--font-bold);
  color: var(--color-neutral-white);
  font-size: 2.1rem;
  line-height: 3rem;
  margin-bottom: 20px;
}

.find-password {
  font-family: var(--font-regular);
  font-size: 1.2rem;
  margin-bottom: 20px;
  margin-top: auto;
  align-self: center;
}

.find-password-text {
  color: var(--color-neutral-100);
  margin-right: 1rem;
}

.find-password-link {
  color: var(--color-primary-500);
}

.next-button {
  align-self: center;
}
</style>
