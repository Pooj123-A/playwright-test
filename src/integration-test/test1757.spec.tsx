
import { test, expect } from "@playwright/experimental-ct-react";
import App1757 from "../example/App1757.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1757 />);
  await expect(component).toContainText("Learn React");
});
