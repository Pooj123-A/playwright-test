
import { test, expect } from "@playwright/experimental-ct-react";
import App1728 from "../example/App1728.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1728 />);
  await expect(component).toContainText("Learn React");
});
