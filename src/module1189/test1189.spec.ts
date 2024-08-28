
import { test, expect } from "@playwright/experimental-ct-react";
import App1189 from "./App1189.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1189 />);
  await expect(component).toContainText("Learn React");
});
