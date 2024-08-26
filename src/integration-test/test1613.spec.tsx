
import { test, expect } from "@playwright/experimental-ct-react";
import App1613 from "../example/App1613.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1613 />);
  await expect(component).toContainText("Learn React");
});
