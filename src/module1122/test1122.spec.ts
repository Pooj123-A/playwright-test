
import { test, expect } from "@playwright/experimental-ct-react";
import App1122 from "./App1122.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1122 />);
  await expect(component).toContainText("Learn React");
});
