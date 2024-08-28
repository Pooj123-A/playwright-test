
import { test, expect } from "@playwright/experimental-ct-react";
import App1017 from "./App1017.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1017 />);
  await expect(component).toContainText("Learn React");
});
