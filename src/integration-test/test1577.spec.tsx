
import { test, expect } from "@playwright/experimental-ct-react";
import App1577 from "../example/App1577.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1577 />);
  await expect(component).toContainText("Learn React");
});
