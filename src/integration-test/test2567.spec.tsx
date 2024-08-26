
import { test, expect } from "@playwright/experimental-ct-react";
import App2567 from "../example/App2567.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2567 />);
  await expect(component).toContainText("Learn React");
});
