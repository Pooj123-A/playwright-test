
import { test, expect } from "@playwright/experimental-ct-react";
import App1390 from "../example/App1390.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1390 />);
  await expect(component).toContainText("Learn React");
});
