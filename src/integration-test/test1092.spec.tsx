
import { test, expect } from "@playwright/experimental-ct-react";
import App1092 from "../example/App1092.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1092 />);
  await expect(component).toContainText("Learn React");
});
