
import { test, expect } from "@playwright/experimental-ct-react";
import App1187 from "./App1187.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1187 />);
  await expect(component).toContainText("Learn React");
});
