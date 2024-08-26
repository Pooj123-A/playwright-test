
import { test, expect } from "@playwright/experimental-ct-react";
import App1952 from "../example/App1952.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1952 />);
  await expect(component).toContainText("Learn React");
});
