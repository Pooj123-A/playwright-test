
import { test, expect } from "@playwright/experimental-ct-react";
import App1959 from "./App1959.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1959 />);
  await expect(component).toContainText("Learn React");
});
