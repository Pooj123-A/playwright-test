
import { test, expect } from "@playwright/experimental-ct-react";
import App2809 from "../example/App2809.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2809 />);
  await expect(component).toContainText("Learn React");
});
