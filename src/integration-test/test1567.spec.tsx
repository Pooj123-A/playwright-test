
import { test, expect } from "@playwright/experimental-ct-react";
import App1567 from "../example/App1567.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1567 />);
  await expect(component).toContainText("Learn React");
});
