
import { test, expect } from "@playwright/experimental-ct-react";
import App1241 from "./App1241.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1241 />);
  await expect(component).toContainText("Learn React");
});
