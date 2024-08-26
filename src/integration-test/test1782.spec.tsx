
import { test, expect } from "@playwright/experimental-ct-react";
import App1782 from "../example/App1782.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1782 />);
  await expect(component).toContainText("Learn React");
});
