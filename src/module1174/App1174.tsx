
import { test, expect } from "@playwright/experimental-ct-react";
import App1174 from "./App1174.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1174 />);
  await expect(component).toContainText("Learn React");
});
