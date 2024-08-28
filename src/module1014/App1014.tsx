
import { test, expect } from "@playwright/experimental-ct-react";
import App1014 from "./App1014.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1014 />);
  await expect(component).toContainText("Learn React");
});
