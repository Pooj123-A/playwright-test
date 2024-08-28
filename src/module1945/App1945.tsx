
import { test, expect } from "@playwright/experimental-ct-react";
import App1945 from "./App1945.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1945 />);
  await expect(component).toContainText("Learn React");
});
