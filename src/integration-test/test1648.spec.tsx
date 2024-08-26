
import { test, expect } from "@playwright/experimental-ct-react";
import App1648 from "../example/App1648.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1648 />);
  await expect(component).toContainText("Learn React");
});
