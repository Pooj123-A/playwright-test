
import { test, expect } from "@playwright/experimental-ct-react";
import App1068 from "./App1068.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1068 />);
  await expect(component).toContainText("Learn React");
});
