
import { test, expect } from "@playwright/experimental-ct-react";
import App1729 from "../example/App1729.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1729 />);
  await expect(component).toContainText("Learn React");
});
