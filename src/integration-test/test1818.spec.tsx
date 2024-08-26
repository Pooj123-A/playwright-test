
import { test, expect } from "@playwright/experimental-ct-react";
import App1818 from "../example/App1818.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1818 />);
  await expect(component).toContainText("Learn React");
});
