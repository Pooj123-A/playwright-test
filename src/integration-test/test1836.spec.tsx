
import { test, expect } from "@playwright/experimental-ct-react";
import App1836 from "../example/App1836.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1836 />);
  await expect(component).toContainText("Learn React");
});
