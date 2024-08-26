
import { test, expect } from "@playwright/experimental-ct-react";
import App1505 from "../example/App1505.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1505 />);
  await expect(component).toContainText("Learn React");
});
