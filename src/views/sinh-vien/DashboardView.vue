<template>
    <div class="min-h-screen bg-gray-50 font-sans text-gray-800 flex">
        
        <Sidebar />

        <div class="flex-1 flex flex-col min-w-0">
            <TopHeader />

            <main class="p-6 md:p-10 max-w-[1600px] mx-auto w-full space-y-8">
                
                <section>
                    <h1 class="text-2xl md:text-3xl font-black text-gray-800">Trang chủ</h1>
                </section>

                <StatsOverview />

                <div class="grid grid-cols-1 xl:grid-cols-3 gap-8">
                    
                    <div class="xl:col-span-2 space-y-8">
                        <ScheduleWidget />
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <TuitionWidget />
                            <TrainingPointWidget />
                        </div>

                        <StudyChartWidget />

                        <UpcomingDeadlines />
                    </div>

                    <div class="space-y-8">
                        <AdvisorContact />
                        
                        <QuickActions />
                        
                        <ExamSchedule />
                        
                        <LatestGrades />
                        
                        <NewsWidget />
                    </div>
                    
                </div>

            </main>
        </div>
    </div>
</template>

<script setup>
import Sidebar from '@/components/layout/Sidebar.vue';
import TopHeader from '@/components/layout/TopHeader.vue';

import StatsOverview from '@/components/dashboard/StatsOverview.vue';
import ScheduleWidget from '@/components/dashboard/ScheduleWidget.vue';
import TuitionWidget from '@/components/dashboard/TuitionWidget.vue';
import TrainingPointWidget from '@/components/dashboard/TrainingPointWidget.vue';
import StudyChartWidget from '@/components/dashboard/StudyChartWidget.vue';
import UpcomingDeadlines from '@/components/dashboard/UpcomingDeadlines.vue';

import AdvisorContact from '@/components/dashboard/AdvisorContact.vue';
import QuickActions from '@/components/dashboard/QuickActions.vue';
import ExamSchedule from '@/components/dashboard/ExamSchedule.vue';
import LatestGrades from '@/components/dashboard/LatestGrades.vue';
import NewsWidget from '@/components/dashboard/NewsWidget.vue';
</script>