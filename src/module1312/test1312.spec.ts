
import { test, expect } from "@playwright/experimental-ct-react";
import App1312 from "./App1312.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1312 />);
  await expect(component).toContainText("Learn React");
});
