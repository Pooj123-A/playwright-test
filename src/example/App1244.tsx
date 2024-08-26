
import { test, expect } from "@playwright/experimental-ct-react";
import App1244 from "./App1244.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1244 />);
  await expect(component).toContainText("Learn React");
});
