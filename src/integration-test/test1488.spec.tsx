
import { test, expect } from "@playwright/experimental-ct-react";
import App1488 from "../example/App1488.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1488 />);
  await expect(component).toContainText("Learn React");
});
