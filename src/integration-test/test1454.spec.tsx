
import { test, expect } from "@playwright/experimental-ct-react";
import App1454 from "../example/App1454.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1454 />);
  await expect(component).toContainText("Learn React");
});
