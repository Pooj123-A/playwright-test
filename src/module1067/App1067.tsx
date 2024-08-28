
import { test, expect } from "@playwright/experimental-ct-react";
import App1067 from "./App1067.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1067 />);
  await expect(component).toContainText("Learn React");
});
