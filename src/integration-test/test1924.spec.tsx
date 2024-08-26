
import { test, expect } from "@playwright/experimental-ct-react";
import App1924 from "../example/App1924.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1924 />);
  await expect(component).toContainText("Learn React");
});
