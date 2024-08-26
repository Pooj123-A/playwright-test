
import { test, expect } from "@playwright/experimental-ct-react";
import App2656 from "../example/App2656.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2656 />);
  await expect(component).toContainText("Learn React");
});
