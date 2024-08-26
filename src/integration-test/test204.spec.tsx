
import { test, expect } from "@playwright/experimental-ct-react";
import App204 from "../example/App204.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App204 />);
  await expect(component).toContainText("Learn React");
});
