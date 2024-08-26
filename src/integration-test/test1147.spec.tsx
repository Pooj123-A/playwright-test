
import { test, expect } from "@playwright/experimental-ct-react";
import App1147 from "../example/App1147.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1147 />);
  await expect(component).toContainText("Learn React");
});
