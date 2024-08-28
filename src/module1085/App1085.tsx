
import { test, expect } from "@playwright/experimental-ct-react";
import App1085 from "./App1085.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1085 />);
  await expect(component).toContainText("Learn React");
});
