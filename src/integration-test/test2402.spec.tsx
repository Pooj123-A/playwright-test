
import { test, expect } from "@playwright/experimental-ct-react";
import App2402 from "../example/App2402.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2402 />);
  await expect(component).toContainText("Learn React");
});
