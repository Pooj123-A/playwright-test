
import { test, expect } from "@playwright/experimental-ct-react";
import App1094 from "../example/App1094.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1094 />);
  await expect(component).toContainText("Learn React");
});
