
import { test, expect } from "@playwright/experimental-ct-react";
import App1997 from "../example/App1997.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1997 />);
  await expect(component).toContainText("Learn React");
});
