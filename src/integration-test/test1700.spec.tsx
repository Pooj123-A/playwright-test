
import { test, expect } from "@playwright/experimental-ct-react";
import App1700 from "../example/App1700.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1700 />);
  await expect(component).toContainText("Learn React");
});
