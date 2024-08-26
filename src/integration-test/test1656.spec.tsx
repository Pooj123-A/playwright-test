
import { test, expect } from "@playwright/experimental-ct-react";
import App1656 from "../example/App1656.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1656 />);
  await expect(component).toContainText("Learn React");
});
