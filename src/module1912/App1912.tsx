
import { test, expect } from "@playwright/experimental-ct-react";
import App1912 from "./App1912.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1912 />);
  await expect(component).toContainText("Learn React");
});
